import {db} from  '@/db'
import {redirect} from 'next/navigation'

export default function SnippetCreatePage(){

    async function createSnippet(formData:FormData){

        //This needs to be server action
        
        'use server'; //it is a special code that means server action and validate
        const title =formData.get('title') as string;
        const code = formData.get('code') as string;

         
        //Create a new record in a database
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            }
        });

        console.log(snippet)
        //Redirect user back to the home
        
        redirect('/')

    }


    return  <form action={createSnippet}>
       <h3 className="font-bold m3">Create Snippet</h3> 
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <label className="w-12" htmlFor="title">Title</label>
                <input
                    name ="title"
                    className ="border rounded p-2 w-full"
                    id="title"
                ></input>
            </div>

            <div className="flex gap-4">
                <label className="w-12" htmlFor="code">Code</label>
                <textarea
                    name ="code"
                    className ="border rounded p-2 w-full"
                    id="code"
                ></textarea>
            </div>
            <button type="submit" className="rounded p-2 bg-blue-200">Create</button>

        </div>
    </form>
}