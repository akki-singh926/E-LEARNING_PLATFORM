import React, { useState } from 'react'
import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function Login() {
  const [loginInput,setLoginInput]=useState({email:"",password:""})
 const [signupInput,setSignipInput]=useState({ name:"",email:"",password:""})
 const changeInputHandler=(e,type)=>{
  const {name,value}=e.target;
  if(type==='signup'){
    setSignipInput({...signupInput,[name]:value});
  }
  else{
    setLoginInput({...loginInput,[name]:value})
  }
 }

  return (
     <div className="flex item-center w-full  justify-center">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
               Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input type='text' name='name'value={signupInput.name}onChange={(e)=>changeInputHandler(e,'signup')}placeholder="eg Akash" required='true'/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email</Label>
                 <Input type='email'name='email'value={signupInput.email} onChange={(e)=>changeInputHandler(e,'signup')} placeholder="eg Akash@gmail.com" required='true'/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-password">Password</Label>
                 <Input type='password'name='password'value={signupInput.password} onChange={(e)=>changeInputHandler(e,'signup')} placeholder="eg.******" required='true'/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
               Login your password here. After signup you'll be logged in
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email</Label>
                 <Input type='email' name='email'value={loginInput.email}onChange={(e)=>changeInputHandler(e,'login')} placeholder="eg Akash@gmail.com" required='true'/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-password">Password</Label>
                 <Input type='password'name='password'value={loginInput.password} onChange={(e)=>changeInputHandler(e,'login')} placeholder="eg.******" required='true'/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login