// Global

const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SERARCH = '/search'


// Users

const USERS = "/users"
const USER_DETAIL = '/:id'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'


// Videos

const VIDOES = '/videos'
const UPOLAD = '/upload'
const VIDOE_DETAIL = '/:id'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'


const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SERARCH,
  users: USERS,
  userDetail: (id) => {
    if(id){
      return `/users/${id}`
    }else{
      return USER_DETAIL
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDOES,
  upload: UPOLAD,
  videoDetail: (id) => {
    if(id){
      return `/videos/${id}`
    }else{
      return VIDOE_DETAIL;
    }
  },
  editVideo: id => {
    if(id){
      return `/videos/${id}/edit`
    }else{
      return EDIT_VIDEO
    }
  },
  deleteVideo: id => {
    if(id){
      return `/videos/${id}/delete`
    }else{
      return DELETE_VIDEO
    }
  }
}

export default routes