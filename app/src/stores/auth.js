import { defineStore } from 'pinia'
import api from '../services/api.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },

    async fetchUser() {
      if (!this.token) return
      
      try {
        this.loading = true
        const { data } = await api.get('usuarios/me')
        this.user = data
      } catch (error) {
        console.error('Erro ao buscar usuário:', error)
        this.logout()
      } finally {
        this.loading = false
      }
    }
  }
})
