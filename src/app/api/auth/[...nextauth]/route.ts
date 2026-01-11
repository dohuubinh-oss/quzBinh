import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@/lib/mongodb'
import CredentialsProvider from 'next-auth/providers/credentials'

// You will need to import your User model and a password comparison function
// import User from '@/models/User'; // Example path
// import { compare } from 'bcrypt'; // Example password hashing library

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email || !credentials.password) {
          throw new Error('Missing credentials');
        }

        // Example logic using Mongoose (you'll need to create the User model)
        /*
        await connectToDatabase(); // A helper to connect mongoose

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          // Not found
          return null;
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          // Password doesn't match
          return null;
        }

        // Any object returned will be saved in `user` property of the JWT
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
        */
       
        // For now, returning a mock user. 
        // TODO: Replace this with your actual user lookup and password validation!
        console.log("WARNING: Bypassing authentication for development. Implement real auth!");
        return {
          id: "1",
          name: "Test User",
          email: credentials.email
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Include user.id on session
    async session({ session, token }) {
      if (session.user) {
         (session.user as any).id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // signIn: '/auth/signin', // Optionally, define a custom sign-in page
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
