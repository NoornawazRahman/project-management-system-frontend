import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import IssueCard from './IssueCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssues } from '@/Redux/Issue/Action'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const IssueList = ({ title, status }) => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { issue } = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchIssues(id))
    }, [id])
    // console.log(`debug`, issue.issues)
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
                                issue.issues
                                    .filter((issue) => issue.status === status)
                                    .map((item) =>
                                        <IssueCard key={item.id} item={item} projectId={id} />
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
                            <CreateIssueForm status={status} />
                        </DialogContent>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}

export default IssueList