import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import IssueCard from './IssueCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'

const IssueList = ({ title, status }) => {
    return (
        <div>
            <Dialog>

                <Card className='w-full md:w-75 lg:w-77.5' >
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className='px-2'>
                        <div className='space-y-2'>
                            {
                                [1, 1, 1].map((item) =>
                                    <IssueCard key={item} />
                                )
                            }

                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger>
                            <Button
                                variant="outline"
                                className='w-full flex items-center gap-2'
                            >
                                <PlusIcon />
                                Create Issue
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Create New Issue
                                </DialogTitle>
                            </DialogHeader>
                            <CreateIssueForm />
                        </DialogContent>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}

export default IssueList