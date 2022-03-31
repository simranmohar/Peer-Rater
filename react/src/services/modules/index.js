// ------------------------- Get Bearer Token -------------------------

const user = JSON.parse(localStorage.getItem("user"));
if (!user){
    // Redirect to login page here
}
const config = {
    headers: {
        Authorization: "Bearer " + user.access_token
    }
}

API_URL = `localhost:8888`
// CHANGE API_URL ONCE BACKEND IS DONE

// ------------------------- Get All peer-groups request -------------------------

const [GroupsInfo, setGroupsInfo] = useState({});

useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(API_URL + "/peer-groups", config);
        // REPLACE URL
        const body = await result.json();
        setGroupsInfo(body);
    }
    fetchData();
}, []);

// ------------------------- Get ONE peer-groups request -------------------------

const FetchOneGroup = async () => {
    const result = await fetch(API_URL + "/peer-groups" + id, config);
    // $ID WILL BE THE GROUP ID
    const body = await result.json();
    setGroupInfo(body);
}

// Code to set in UI to display all groups

const [GroupInfo, setGroupInfo] = useState({
    id: 0,
    user_id: 0,
    description: '',
    created_at: '',
    updated_at: ''
});

FetchOneGroup();


// ------------------------- Get ONE peer-groups request -------------------------

groupName = "example"
// Change Group name to desired choice

const description = { description: groupName };
// PostPeerGroup(description)

function PostPeerGroup(prop) {
    fetch(API_URL + "/peer-groups", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prop),
      })
}

// TO-DO: Add bearer token to request
function UpdatePeerGroup(prop) {
    fetch(API_URL + "/peer-groups" + prop.id, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: prop,
      })
}
