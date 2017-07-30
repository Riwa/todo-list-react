import mobx from 'mobx'
import mobxReact from 'mobx-react'
import axios from 'axios'

class Store {
    @observable tasks = [];

    fetchTasks(){
        axios.get('http://localhost:9000').then((response) => {
            this.tasks = response.data
        })
    }
}