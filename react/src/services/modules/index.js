// ------------------------- Get Bearer Token -------------------------

import authHeader from "../authheader";

// const request = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ 'access_token': authHeader })
//     // get bearer token from cookie in local storage
// };

const user = JSON.parse(localStorage.getItem("user"));
if (!user){
    // Redirect to login page here
}
const config = {
    headers: {
        Authorization: "Bearer " + user.access_token
    }
}

//     return axios.get(API_URL + "/me", config).then((response) => {
//         if (response.data.name) {
//             localStorage.setItem("currentUser", JSON.stringify(response.data));
//         }
//     }).catch((e) => {
//         alert("Fail")
//     })
// }

API_URL = `localhost:8888`

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

// Sets an error if no groups have been retrieved
var others = GroupsInfo;
if (param !== undefined) {
    others = Object.values(GroupsInfo).filter(p => p.id !== +param.exceptId);
}


// ------------------------- Get ONE peer-groups request -------------------------

const FetchOneGroup = async () => {
    const result = await fetch(API_URL + "/peer-groups" + id, config);
    // CHANGE LOCALHOST TO API URL
    // $ID WILL BE THE GROUP ID
    const body = await result.json();
    // setGroupInfo(body);
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
