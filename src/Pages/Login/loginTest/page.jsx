'use client'

import * as React from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"


import { FormProvider, useForm } from "react-hook-form";
import { loginFormSchema } from "../lib/validations/login-form";


export default function LoginPage(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const tryLoginFunction = (data) => {
          props.tryLoginFunction(data);
        }
        tryLoginFunction(data);
    }

  return (
    <div className="min-h-screen text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Card className="w-[525px] h-[550px] rounded-2xl pl-10 pr-10">
            <CardHeader>
              <CardTitle className="text-6xl">Highly Succeed AI Bot</CardTitle>
              <CardDescription className="text-3xl text-gray-500">Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="mt-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xl mb-5" htmlFor="email">Email</Label>
                    <Input className="text-xl h-[60px] text-gray-500 focus:text-white" id="email" type="text" placeholder="Enter your Email" {...register("email", {required: true})}/>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xl mb-5 mt-5" htmlFor="password">Password</Label>
                    <Input className="text-xl h-[60px] text-gray-500 focus:text-white" id="password"  placeholder="Enter your Password" {...register("password", {required: true})} type="password"/>
                  </div>
                </div>

                <div className="-translate-y-[-20px] pl-3 pr-4"> 
                  <input type="checkbox" className="form-check-input" id="staySignedIn"></input>
                  <label className="form-check-label check-state" for="exampleCheck1">Stay signed in</label>
                  <a className="linkRegister">Make a new account</a>
                </div>
                

              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Button className="object-right-bottom w-full text-3xl h-[50px] rounded-2xl hover:bg-orange-400 -translate-y-[-40px]">Login</Button>
            </form>
            </CardFooter>
          </Card>
        </div>
    </div>
  )
}