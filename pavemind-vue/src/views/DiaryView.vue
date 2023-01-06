<template>
  <div class="min-h-[calc(100vh_-_64px)]">
    <header class="bg-gradient-to-r from-sea-800 to-wave-600 pb-44"></header>

    <main class="pb-8 -mt-24">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Profile</h1>
        <div class="grid items-start grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="profile-overview-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6 bg-white">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <p class="text-lg font-medium text-gray-600">How are you feeling today?</p>
                    </div>
                  </div>
                </div>
                <div
                     class="grid grid-cols-1 border-t border-gray-200 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                  <div class="flex justify-center px-6 py-5">
                    <SadIcon class="w-20 h-20 fill-scarlet-600"
                             aria-hidden="true" />
                  </div>
                  <div class="flex justify-center px-6 py-5">
                    <NeutralIcon class="w-20 h-20 fill-amber-600"
                                 aria-hidden="true" />
                  </div>
                  <div class="flex justify-center px-6 py-5">
                    <HappyIcon class="w-20 h-20 fill-emerald-600"
                               aria-hidden="true" />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="profile-overview-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6 bg-white">
                  <div class="pb-4 sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <p class="text-lg font-medium text-gray-600">Extra Questions (optional) <span class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-sea-800">Premium</span></p>
                      
                    </div>
                  </div>
                  <div>
                    <div class="pb-2">
                      <label for="steps-range"
                             class="block mb-2 text-sm font-medium text-gray-900">How motivated do you feel?</label>
                      <div class="grid grid-cols-3">
                        <div>
                          <p>Demotivated</p>
                        </div>
                        <div>
                          <p class="text-center">Neutral</p>
                        </div>
                        <div>
                          <p class="text-right">Motivated</p>
                        </div>
                      </div>
                      <input id="steps-range"
                             type="range"
                             min="0"
                             max="8"
                             value="4"
                             step="1"
                             class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-sea-300 accent-sea-900">
                    </div>
                    <div class="pb-2">
                      <label for="steps-range"
                             class="block mb-2 text-sm font-medium text-gray-900">Did you enjoy your day?</label>
                      <div class="grid grid-cols-3">
                        <div>
                          <p>Absolutely not</p>
                        </div>
                        <div>
                          <p class="text-center">It was ok</p>
                        </div>
                        <div>
                          <p class="text-right">I loved it</p>
                        </div>
                      </div>
                      <input id="steps-range"
                             type="range"
                             min="0"
                             max="8"
                             value="4"
                             step="1"
                             class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-sea-300 accent-sea-900">
                    </div>
                    <div class="pb-2">
                      <label for="steps-range"
                             class="block mb-2 text-sm font-medium text-gray-900">Are you enjoying your school and/or
                        work?</label>
                      <div class="grid grid-cols-3">
                        <div>
                          <p>I dislike it</p>
                        </div>
                        <div>
                          <p class="text-center">It's fine</p>
                        </div>
                        <div>
                          <p class="text-right">I really like it</p>
                        </div>
                      </div>
                      <input id="steps-range"
                             type="range"
                             min="0"
                             max="8"
                             value="4"
                             step="1"
                             class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-sea-300 accent-sea-900">
                    </div>
                    <div class="pb-2">
                      <label for="steps-range"
                             class="block mb-2 text-sm font-medium text-gray-900">Do you feel supported?</label>
                      <div class="grid grid-cols-3">
                        <div>
                          <p>I don't</p>
                        </div>
                        <div>
                          <p class="text-center">A little bit</p>
                        </div>
                        <div>
                          <p class="text-right">Absolutely</p>
                        </div>
                      </div>
                      <input id="steps-range"
                             type="range"
                             min="0"
                             max="8"
                             value="4"
                             step="1"
                             class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-sea-300 accent-sea-900">
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-700 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Announcements -->
            <section aria-labelledby="announcements-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2 class="text-base font-medium text-gray-900"
                      id="announcements-title">Feelings Map</h2>
                  <p class="pb-4">The graph shows you a detailed view of your submissions, the highest point is you
                    being happy, middle is neutral and the lowest is sad.
                  </p>
                  <div id="chart">
                    <div class="toolbar">
                      <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                              id="one_month"
                              @click="updateData('one_month')"
                              :class="{active: selection==='one_month'}">
                        1M
                      </button>

                      <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                              id="six_months"
                              @click="updateData('six_months')"
                              :class="{ active: selection === 'six_months' }">
                        6M
                      </button>

                      <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                              id="one_year"
                              @click="updateData('one_year')"
                              :class="{ active: selection === 'one_year' }">
                        1Y
                      </button>

                      <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                              id="all"
                              @click="updateData('all')"
                              :class="{ active: selection === 'all' }">
                        ALL
                      </button>
                    </div>

                    <div id="feelings-map">
                      <apexchart type="area"
                                 height="350"
                                 ref="chart"
                                 :options="chartOptions"
                                 :series="feelings"></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="recent-hires-title">
              <div class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-6">
                  <h2 class="text-base font-medium text-gray-900"
                      id="recent-hires-title">Emotional Map <span class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-sea-800">Premium</span></h2>
                  <p>This graph shows your overall emotions over the past 30 days, it can help you notice problems you are experiencing and possibly work on them (the recommended number all your emotions should be is 5)</p>
                  <div class="flow-root mt-6">
                    <div id="chart">
                      <apexchart type="radar"
                                 height="350"
                                 :options="radarOptions"
                                 :series="emotions"></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  
<script setup>
import SadIcon from '@/assets/faces/sad.svg'
import NeutralIcon from '@/assets/faces/neutral.svg'
import HappyIcon from '@/assets/faces/happy.svg'
</script>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    updateData: function (timeline) {
      this.selection = timeline

      switch (timeline) {
        case 'one_month':
          this.$refs.chart.zoomX(
            (new Date().setDate(new Date().getDate() - 30)),
            Date.now()
          )
          break
        case 'six_months':
          this.$refs.chart.zoomX(
            (new Date().setDate(new Date().getDate() - 180)),
            Date.now()
          )
          break
        case 'one_year':
          this.$refs.chart.zoomX(
            (new Date().setDate(new Date().getDate() - 360)),
            Date.now()
          )
          break
        case 'all':
          this.$refs.chart.zoomX(
            new Date('23 Jan 2012').getTime(),
            Date.now()
          )
          break
        default:
      }
    }
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'feelings-map',
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          min: new Date('01 Jan 2023').getTime(),
          tickAmount: 1,
        },
        yaxis: {
          labels: {
            show: false,
            formatter: function (val) {
              return val.toFixed(0);
            }
          }
        },
        tooltip: {
          enabled: false,
          x: {
            format: 'dd MMM yyyy'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
      },
      radarOptions: {
        chart: {
          id: 'emotions-map',
          type: 'radar',
          height: 350,
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        markers: {
          size: 0,
        },
        fill: {
          opacity: 0.1
        },
        xaxis: {
          categories: ['Motivation', 'Enjoyment', 'Work/School', 'Support']
        }
      },


      selection: 'one_month',
      feelings: [{
        data: [
          [(new Date().setDate(new Date().getDate() - 1)), 2],
          [(new Date().setDate(new Date().getDate() - 2)), 2],
          [(new Date().setDate(new Date().getDate() - 3)), 1],
          [(new Date().setDate(new Date().getDate() - 4)), 3],
          [(new Date().setDate(new Date().getDate() - 5)), 1],

        ]
      }],
      emotions: [{
            data: [2, 6, 5, 8],
          },],
    };
  },
};
</script>