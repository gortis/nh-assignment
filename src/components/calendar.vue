<template>
  <div class="calendar">
    <div class="container">
      <table class="table">
        <tr>
          <th><h1>Physicians</h1></th>
          <th v-if="selectedPhysician != null">{{selectedPhysician.first_name + " " + selectedPhysician.last_name}}</th>

        </tr>
        <tr>
          <td>
            <ul>
              <li v-for="phys in physicians" :key="phys.id" @click="selectPhys(phys)">{{phys.first_name + " " + phys.last_name}}</li>
            </ul>
          </td>
          <td>
            <table class="table" v-if="selectedPhysician != null">
              <tr>
                <th>Patient Name</th>
                <th>Appointment Time</th>
                <th>Kind</th>
              </tr>
              <tr v-for="appt in apptsByPhys" :key="appt.id">
                <td>{{appt.patient_first_name + " " + appt.patient_last_name}}</td>
                <td>{{appt.start_time}}</td>
                <td>{{appt.appointment_kind}}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'calendar',
  data () {
    return {
      selectedPhysician: null
    }
  },
  created () {
    this.$store.commit('getPhysicians');
    this.$store.commit('getAppointments');
    this.selectedPhysician = this.physicians[0];
  },
  computed: {
    ...mapGetters({
      physicians: 'physicians',
      appointments: 'appointments'
    }),
    apptsByPhys: {
      get () {
        return this.appointments.filter((item) => item.physician_id == this.selectedPhysician.id);
      }
    }
  },
  methods: {
    selectPhys(physician) {
      this.selectedPhysician = physician;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calendar {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
  cursor: pointer;
}
a {
  color: #42b983;
}
table {
  text-align: center;
}
table th {
  font-size: 16pt;
}
</style>
