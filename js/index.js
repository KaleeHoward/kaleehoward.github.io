const username = 'KaleeHoward';

getRepo();

async function getRepo(){

    try{

        const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}`);

        if(!response.ok){
            throw new Error("Could not fetch repo");
        }

        const data = await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
}