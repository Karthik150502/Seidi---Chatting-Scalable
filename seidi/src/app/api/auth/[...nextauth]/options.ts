import { Account, AuthOptions, ISODateString } from "next-auth"
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"
import { LOGIN_URL } from "@/lib/api";
function getGoogleCredentials() {
    const googleClientId = process.env.GOOGLE_CLIENT_ID!;
    const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!;

    if (!googleClientId || googleClientId.length === 0) {
        throw new Error("Missing Google CLIENT ID");
    }
    if (!googleClientSecret || googleClientSecret.length === 0) {
        throw new Error("Missing Google CLIENT SECRET");
    }
    return { googleClientId, googleClientSecret }
}



export interface CustomSession {
    user?: CustomUser,
    expiresAt: ISODateString
}

export interface CustomUser {
    id?: string | null,
    name?: string | null,
    email?: string | null,
    image?: string | null,
    provider?: string | null,
    token?: string | null,
}


const googleSecrets = getGoogleCredentials();


export const authOptions: AuthOptions = {
    pages: {
        signIn: "/sign-in"
    },

    session: {
        maxAge: 2 * 60 * 60, // 2 Hours
    },

    providers: [
        GoogleProvider({
            clientId: googleSecrets.googleClientId,
            clientSecret: googleSecrets.googleClientSecret,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],

    callbacks: {

        async signIn({ user, account }: { user: CustomUser, account: Account | null }) {

            console.log("=========================================")
            console.log("async signIn()")
            console.log("options.ts")
            console.log("user = ", user);
            console.log("account = ", account);
            console.log("=========================================")

            try {


                const payload = {
                    name: user.name,
                    email: user.email,
                    provider: account?.provider,
                    oauth_id: account?.providerAccountId,
                    image: user?.image
                }

                const { data } = await axios.post(LOGIN_URL, payload);
                user.id = data?.user?.id.toString();
                user.token = data?.user?.token;
                user.provider = data?.user?.provider;
                return true;
            } catch (e) {
                console.log(e)
                return false;
            }

        },

        async session({ session, token, user }: { session: CustomSession, user: CustomUser, token: JWT }) {

            console.log("=========================================")
            console.log("async session()")
            console.log("options.ts")
            console.log("session = ", session);
            console.log("token = ", token);
            console.log("user = ", user);
            console.log("=========================================")

            session.user = token.user as CustomUser;
            return session;
        },
        async jwt({ token, user }) {
            console.log("=========================================")
            console.log("async jwt()")
            console.log("options.ts")
            console.log("token = ", token);
            console.log("user = ", user);
            console.log("=========================================")

            if (user) {
                token.user = user;
            }
            return token;
        }
    }
}