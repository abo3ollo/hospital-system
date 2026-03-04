"use client"

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { Authenticated, ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import React from 'react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { useEffect } from 'react'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>
          <UserSync />
        </Authenticated>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}



function UserSync() {
  const { user } = useUser()
  const createUser = useMutation(api.patients.createUser)

  useEffect(() => {
    if (user) {
      createUser({
        name: user.fullName || user.firstName || "Unknown",
        email: user.emailAddresses[0].emailAddress
      })
    }
  }, [user, createUser])

  return (
    <div>

    </div>
  )
}

export default ConvexClientProvider