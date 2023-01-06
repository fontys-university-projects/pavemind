<template>
    <!-- Payment details -->
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="payment-details-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="bg-white py-6 px-4 sm:p-6">
                        <div>
                            <h2 id="payment-details-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Payment details</h2>
                            <p class="mt-1 text-sm text-gray-500">Update your billing information. Please note that
                                updating your location could affect your tax rates.</p>
                        </div>

                        <div class="mt-6 grid grid-cols-4 gap-6">
                            <div class="col-span-4 sm:col-span-2">
                                <label for="first-name"
                                       class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text"
                                       name="first-name"
                                       id="first-name"
                                       autocomplete="cc-given-name"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="last-name"
                                       class="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text"
                                       name="last-name"
                                       id="last-name"
                                       autocomplete="cc-family-name"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="email-address"
                                       class="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text"
                                       name="email-address"
                                       id="email-address"
                                       autocomplete="email"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="street-address"
                                       class="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text"
                                       name="street-address"
                                       id="street-address"
                                       autocomplete="street-address"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="country"
                                       class="block text-sm font-medium text-gray-700">Country</label>
                                <select id="country"
                                        name="country"
                                        autocomplete="country-name"
                                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm">
                                    <option v-for="country in countries"
                                            :key="country">{{ country }}</option>
                                </select>
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="postal-code"
                                       class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                <input type="text"
                                       name="postal-code"
                                       id="postal-code"
                                       autocomplete="postal-code"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:sea-gray-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-sea-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </section>

        <!-- Plan -->
        <section aria-labelledby="plan-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
                        <div>
                            <h2 id="plan-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Plan</h2>
                        </div>

                        <RadioGroup v-model="selectedPlan">
                            <RadioGroupLabel class="sr-only"> Pricing plans </RadioGroupLabel>
                            <div class="relative -space-y-px rounded-md bg-white">
                                <RadioGroupOption as="template"
                                                  v-for="(plan, planIdx) in plans"
                                                  :key="plan.name"
                                                  :value="plan"
                                                  v-slot="{ checked, active }">
                                    <div
                                         :class="[planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-sea-50 border-sea-200 z-10' : 'border-gray-200', 'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 grid grid-cols-2 focus:outline-none']">
                                        <span class="flex items-center text-sm">
                                            <span :class="[checked ? 'bg-sea-500 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-sea-900' : '', 'h-4 w-4 rounded-full border flex items-center justify-center']"
                                                  aria-hidden="true">
                                                <span class="rounded-full bg-white w-1.5 h-1.5" />
                                            </span>
                                            <RadioGroupLabel as="span"
                                                             class="ml-3 font-medium text-gray-900">{{ plan.name }}
                                            </RadioGroupLabel>
                                        </span>
                                        <RadioGroupDescription as="span"
                                                               class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 text-right">
                                            <span
                                                  :class="[checked ? 'text-sea-900' : 'text-gray-900', 'font-medium']">€{{
                                                plan.priceMonthly }} / mo</span>
                                            {{ ' ' }}
                                            <span :class="checked ? 'text-sea-700' : 'text-gray-500'">(€{{
                                                plan.priceYearly }} / yr)</span>
                                        </RadioGroupDescription>
                                    </div>
                                </RadioGroupOption>
                            </div>
                        </RadioGroup>

                        <SwitchGroup as="div"
                                     class="flex items-center">
                            <Switch v-model="annualBillingEnabled"
                                    :class="[annualBillingEnabled ? 'bg-sea-500' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2']">
                                <span aria-hidden="true"
                                      :class="[annualBillingEnabled ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                            </Switch>
                            <SwitchLabel as="span"
                                         class="ml-3">
                                <span class="text-sm font-medium text-gray-900">Annual billing</span>
                                <span class="text-sm text-gray-500"> (Save 2 months)</span>
                            </SwitchLabel>
                        </SwitchGroup>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-sea-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </section>

        <!-- Billing history -->
        <section aria-labelledby="billing-history-heading">
            <div class="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                <div class="px-4 sm:px-6">
                    <h2 id="billing-history-heading"
                        class="text-lg font-medium leading-6 text-gray-900">Billing history</h2>
                </div>
                <div class="mt-6 flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <div class="overflow-hidden border-t border-gray-200">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                        <tr>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                Description</th>
                                            <th scope="col"
                                                class="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount
                                            </th>
                                            <!--
                                `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                              -->
                                            <th scope="col"
                                                class="relative px-6 py-3 text-left text-sm font-medium text-gray-500">
                                                <span class="sr-only">View receipt</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 bg-white">
                                        <tr v-for="payment in payments"
                                            :key="payment.id">
                                            <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                <time :datetime="payment.datetime">{{ payment.date }}</time>
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{
                                                payment.description }}</td>
                                            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{{
                                                payment.amount }}</td>
                                            <td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                <a :href="payment.href"
                                                   class="text-sea-600 hover:text-sea-900">View receipt</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    Switch,
    SwitchGroup,
    SwitchLabel,
} from '@headlessui/vue'
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden']

const plans = [
    { name: 'Free', priceMonthly: 0, priceYearly: 0 },
    { name: 'Premium', priceMonthly: 3, priceYearly: 30, student: false },
    { name: 'Student', priceMonthly: 1, priceYearly: 10, student: true },
]
const payments = [
    {
        id: 1,
        date: '1/1/2023',
        datetime: '2023-01-01',
        description: 'Premium Plan - Annual Billing',
        amount: '€30.00',
        href: '#',
    },
    // More payments...
]

const selectedPlan = ref(plans[0])
const annualBillingEnabled = ref(true)
</script>