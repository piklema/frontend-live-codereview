import { defineStore } from 'pinia';
import {getUser} from '../utils/backend';

export default defineStore('books', {
  state: () => ({
    userData: [],
  }),
  actions: {
    async getUserData(id) {
      const response = await getUser(id);  // imitation of backend request
      const rights = {
        watchAll: true, 
        edit: true,
        delete: true
      }

      const user = response.data;
      let userData;
      
      switch(true) {
        case user.role == 'admin':
            userData = {
                name: user.name,
                role: user.role,
                password: user.password,
                permissions: []
            };

            Object.keys(rights).forEach(permission => {
                if (rights[permission]) {
                    if (permission == 'watchAll') {
                        userData.permissions.push('watch-all')
                    } else {
                        userData.permission.push(permission)
                    }
                }
            });
            break
        
        case user.role == 'user':
            userData = {
                name: user.name,
                role: user.role
            }
            break;
      }
      
      
      this.$state.userData = userData;
      return userData;
    },
  },
});
