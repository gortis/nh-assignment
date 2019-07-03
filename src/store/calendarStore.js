import { physicians } from './../assets/data/physicians';
import { appointments } from './../assets/data/appointments';

export const state = {
  physicians: [{id: 1, first_name: "Sarvani", last_name: "Gorti"}],
  appointments: []
}

export const getters = {
  physicians: state => state.physicians,
  appointments: state => state.appointments
}

export const actions = {

}

export const mutations = {
  getPhysicians (state) {
    state.physicians = physicians;
  },
  getAppointments (state) {
    state.appointments = appointments;
  }
}
