import React, {useEffect, useState} from 'react';
import Group from './Group';
import List from "@mui/material/List";

const GroupPage = () => {
        const [surveys, setNewSurveys] = useState('')
        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            var bearer = 'Bearer ' + user.access_token;
            const fetchData = async () => {
                const result = await fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/`, {
                    method: 'get',
                    headers: {
                        'Authorization': bearer,
                        'Content-Type': 'application/json'
                    }
            });
                const body = await result.json();
                console.log("logging here", body)
                console.log()
                setNewSurveys(body);
            }
            fetchData();
        }, []);
        let others = Object.values(surveys)
        return (<>
                <div className="row">
                    {others.map((groups, key) => (       
                    <Group key={key} img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80"
                    title="COMP 3975" description={groups.description} id_value={groups.id}/>
                    ))}
                </div>
            </>
        );
}



export default GroupPage;