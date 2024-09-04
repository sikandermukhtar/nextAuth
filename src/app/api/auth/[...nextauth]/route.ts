

//Bring handlers from auth.ts by destructuring NextAuth
import { handlers } from "@/auth" // Referring to the auth.ts we just created
//Further destructuring handlers
export const { GET, POST } = handlers
