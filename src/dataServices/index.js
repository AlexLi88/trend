import axios from 'axios';

class DataService{
    constructor(){
        this.CLIEND_ID = 'aritzia';
        this.CLIENT_SECRET = 'DYtOeaKLfTkwQbihXIVw5V2lTNd6eZEYv9OEjefbsgLI1A8lxwpxt4gcZTnpnKdS';
        this.API_SERVER = 'https://api.scopemedia.com';
    }

    /**
     * Post Login request
     * @param username
     * @param password
     * @returns {*|axios.Promise}
     */
    login(username, password){
        return axios({
            method: 'POST',
            url: `${this.API_SERVER}/api/authenticate`,
            headers:{
                "Content-Type": "application/json"
            },
            data:{
                username: username,
                password: password
            }
        })
    }

    /**
     * Get logged in user's info
     * IF no user logged in, @returns Promise reject
     * Else @returns {*|axios.Promise}
     */
    getAccount(accessToken){
        let token = `Bearer ${accessToken}`;
        return axios({
            method: 'GET',
            url: `${this.API_SERVER}/api/account`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
    }

    /**
     *
     * @returns {AxiosPromise}
     */
    getTrend(){
        let token = `Bearer ${window.localStorage.getItem('__scope_token')}`;
        return axios({
            method: 'GET',
            url: `${this.API_SERVER}/trending/api/admin/trends?city=nn`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
    }

    queryTrend(date, city){
        let token = `Bearer ${window.localStorage.getItem('__scope_token')}`;
        return axios({
            method: 'GET',
            url: `${this.API_SERVER}/trending/v2/trendings/10/trends`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
    }

    createRecommendations(name, trendingList){
        let token = `Bearer ${window.localStorage.getItem('__scope_token')}`;
        return axios({
            method: 'POST',
            url: `${this.API_SERVER}/trending/v2/recommendations`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token,
                "Client-id": this.CLIEND_ID,
                "Client-secret": this.CLIENT_SECRET
            },
            data:{
                name: name,
                queryTime: new Date().toISOString(),
                trendingsUsed: trendingList.join(',')
            }
        })
    }

    getRecommendations(page, size){
        let token = `Bearer ${window.localStorage.getItem('__scope_token')}`;
        return axios({
            method: 'GET',
            url: `${this.API_SERVER}/trending/v2/recommendations?page=${page}&size=${size}`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token,
                "Client-id": this.CLIEND_ID,
                "Client-secret": this.CLIENT_SECRET
            }
        })
    }

    getRecommendation(id){
        let token = `Bearer ${window.localStorage.getItem('__scope_token')}`;
        return axios({
            method: 'GET',
            url: `${this.API_SERVER}/trending/v2/recommendations/${id}`,
            headers:{
                "Content-Type": "application/json",
                "Authorization": token,
                "Client-id": this.CLIEND_ID,
                "Client-secret": this.CLIENT_SECRET
            }
        })
    }

    searchSimilar(url, page, size){
        return axios({
            method: 'POST',
            url: `${this.API_SERVER}/search/v2/similar`,
            headers:{
                "Content-Type": "application/json",
                "Client-Id": 'demo',
                "Client-Secret": 'demotestsecret'
            },
            data:{
                mediaUrl: url,
                modelId: 'fashion',
                page: page || 0,
                size: size || 12
            }
        })
    }
}
const dataService = new DataService();
export default dataService