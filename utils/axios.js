import axios from 'axios'

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Accept': 'application/json',
        // 'Authorization':'Bearer 26|h2TGBllqdpZuAx7l7uM0WbH4nIr5jqwo4BGQpQQH'
    },
    withCredentials: true,
})
