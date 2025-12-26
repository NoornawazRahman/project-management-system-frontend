import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import {
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Cross1Icon } from '@radix-ui/react-icons'



const CreateIssueForm = () => {
    const form = useForm({
        defaultValues: {
            issueName: "",
            description: ""
        }
    })
    const onSubmit = (data) => {
        console.log("create project data", data)
    }
    return (
        <div>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
                    <FormField
                        control={form.control}
                        name="issueName"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className='border w-full border-gray-700 py-5 px-5'
                                        placeholder='issueName...' />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) =>
                            <FormItem>
                                <FormControl>
                                    <Input {...field} type="text" className='border w-full border-gray-700 py-5 px-5'
                                        placeholder='description...' />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }
                    />

                    <DialogClose>

                        <Button type='submit' className='w-full mt-5'>
                            Create Issue
                        </Button>

                    </DialogClose>
                </form>

            </Form>
        </div>
    )
}

export default CreateIssueForm