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
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useDispatch } from 'react-redux'
import { createComment } from '@/Redux/Comment/Action'



const CreateCommentForm = ({ issueId }) => {
    const dispatch = useDispatch()
    const form = useForm({
        defaultValues: {
            content: ""
        }
    })
    const onSubmit = (data) => {
        dispatch(createComment({ content: data.content, issueId }))
        console.log("create comment form page", data)
    }
    return (
        <div>
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2'>
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) =>
                            <FormItem >
                                <div className='flex gap-2'>
                                    <div>
                                        <Avatar>
                                            <AvatarFallback>R</AvatarFallback>
                                        </Avatar>
                                    </div>

                                    <FormControl>
                                        <Input {...field}
                                            type="text"
                                            className='w-[20rem]'
                                            placeholder='add comment here...'
                                        />
                                    </FormControl>

                                </div>
                                <FormMessage></FormMessage>
                            </FormItem>
                        }
                    />

                    {/* <DialogClose> */}

                    <Button type='submit' className=''>
                        save
                    </Button>

                    {/* </DialogClose> */}
                </form>

            </Form>
        </div>
    )
}

export default CreateCommentForm