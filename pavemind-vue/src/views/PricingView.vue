<template>
    <div class="bg-white">
        <div class="bg-sea-900">

            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="px-0 sm:px-4 lg:flex lg:items-center lg:justify-between lg:px-0">
                    <div class="max-w-xl">
                        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Pricing Plans
                        </h2>
                        <!-- <p class="mt-5 text-xl text-indigo-300">PaveMind,</p> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-2xl bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

            <div class="space-y-24 lg:hidden">
                <section v-for="tier in tiers"
                         :key="tier.name">
                    <div class="mb-8 px-4">
                        <h2 class="text-lg font-medium leading-6 text-gray-900">{{ tier.name }}</h2>
                        <p class="mt-4">
                            <span class="text-4xl font-bold tracking-tight text-gray-900">${{ tier.priceMonthly
                            }}</span>
                            <span class="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
                        <a :href="tier.href"
                           class="mt-6 block w-full rounded-md border-none bg-sea-700 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Buy
                            {{ tier.name }}</a>
                    </div>

                    <table v-for="section in sections"
                           :key="section.name"
                           class="w-full">
                        <caption
                                 class="border-t border-gray-200 bg-gray-50 py-3 px-4 text-left text-sm font-medium text-gray-900">
                            {{
                                    section.name
                            }}
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only"
                                    scope="col">Feature</th>
                                <th class="sr-only"
                                    scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="feature in section.features"
                                :key="feature.name"
                                class="border-t border-gray-200">
                                <th class="py-5 px-4 text-left text-sm font-normal text-gray-500"
                                    scope="row">{{ feature.name }}</th>
                                <td class="py-5 pr-4">
                                    <span v-if="typeof feature.tiers[tier.name] === 'string'"
                                          class="block text-right text-sm text-gray-700">{{ feature.tiers[tier.name]
                                          }}</span>
                                    <template v-else>
                                        <CheckIcon v-if="feature.tiers[tier.name] === true"
                                                   class="ml-auto h-5 w-5 text-green-500"
                                                   aria-hidden="true" />
                                        <MinusIcon v-else
                                                   class="ml-auto h-5 w-5 text-gray-400"
                                                   aria-hidden="true" />
                                        <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Yes' : 'No'
                                        }}</span>
                                    </template>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="border-t border-gray-200 px-4 pt-5">
                        <a href="#"
                           class="block w-full rounded-md border-none bg-sea-700 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Buy
                            {{ tier.name }}</a>
                    </div>
                </section>
            </div>


            <div class="hidden lg:block">
                <table class="h-px w-full table-fixed">
                    <caption class="sr-only">
                        Pricing plan comparison
                    </caption>
                    <thead>
                        <tr>
                            <th class="pb-4 pl-6 pr-6 text-left text-sm font-medium text-gray-900"
                                scope="col">
                                <span class="sr-only">Feature by</span>
                                <span>Plans</span>
                            </th>
                            <th v-for="tier in tiers"
                                :key="tier.name"
                                class="w-1/4 px-6 pb-4 text-left text-lg font-medium leading-6 text-gray-900"
                                scope="col">{{ tier.name }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 border-t border-gray-200">
                        <tr>
                            <th class="py-8 pl-6 pr-6 text-left align-top text-sm font-medium text-gray-900"
                                scope="row">Pricing</th>
                            <td v-for="tier in tiers"
                                :key="tier.name"
                                class="h-full py-8 px-6 align-top">
                                <div class="flex h-full flex-col justify-between">
                                    <div>
                                        <p>
                                            <span class="text-4xl font-bold tracking-tight text-gray-900">€{{
                                                    tier.priceMonthly
                                            }}</span>
                                            <span class="text-base font-medium text-gray-500">/mo</span>
                                        </p>
                                        <p class="mt-4 text-sm text-gray-500">{{ tier.description }}</p>
                                    </div>
                                    <a :href="tier.href"
                                       class="mt-6 block w-full rounded-md border-none bg-sea-700 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Buy
                                        {{ tier.name }}</a>
                                </div>
                            </td>
                        </tr>
                        <template v-for="section in sections"
                                  :key="section.name">
                            <tr>
                                <th class="bg-gray-50 py-3 pl-6 text-left text-sm font-medium text-gray-900"
                                    colspan="4"
                                    scope="colgroup">{{ section.name }}</th>
                            </tr>
                            <tr v-for="feature in section.features"
                                :key="feature.name">
                                <th class="py-5 pl-6 pr-6 text-left text-sm font-normal text-gray-500"
                                    scope="row">{{ feature.name }}</th>
                                <td v-for="tier in tiers"
                                    :key="tier.name"
                                    class="py-5 px-6">
                                    <span v-if="typeof feature.tiers[tier.name] === 'string'"
                                          class="block text-sm text-gray-700">{{ feature.tiers[tier.name] }}</span>
                                    <template v-else>
                                        <CheckIcon v-if="feature.tiers[tier.name] === true"
                                                   class="h-5 w-5 text-green-500"
                                                   aria-hidden="true" />
                                        <MinusIcon v-else
                                                   class="h-5 w-5 text-gray-400"
                                                   aria-hidden="true" />
                                        <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in {{ tier.name }}</span>
                                    </template>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                    <tfoot>
                        <tr class="border-t border-gray-200">
                            <th class="sr-only"
                                scope="row">Choose your plan</th>
                            <td v-for="tier in tiers"
                                :key="tier.name"
                                class="px-6 pt-5">
                                <a href="#"
                                   class="block w-full rounded-md border-none bg-sea-700 py-2 text-center text-sm font-semibold text-white shadow hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Buy
                                    {{ tier.name }}</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>


        <div class="bg-gray-50/40">
            <!-- FAQ -->
            <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                <div class="mt-12">
                    <dl
                        class="space-y-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
                        <div v-for="faq in faqs"
                             :key="faq.id"
                             class="space-y-2">
                            <dt class="text-lg font-medium leading-6 text-gray-900">{{ faq.question }}</dt>
                            <dd class="text-base text-gray-500">{{ faq.answer }}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script setup>
import { CheckIcon, MinusIcon } from '@heroicons/vue/20/solid'

const tiers = [
    {
        name: 'Free',
        href: '#',
        priceMonthly: 0,
        description: 'Take a look at PaveMind while exploring the tip of the iceberg.'
    },
    {
        name: 'Premium',
        href: '#',
        priceMonthly: 3,
        description: 'Unlock all the features, that PaveMind has to offer!',
    },
    {
        name: 'Student',
        href: '#',
        priceMonthly: 1,
        description: 'Are you a Student? Then you will probably like this offer!',
    },
]
const sections = [
    {
        name: 'Features',
        features: [
            { name: 'Ad-free experience', tiers: { Free: false, Premium: true, Student: true } },
            { name: 'Access to the Community', tiers: { Free: "Limited", Premium: true, Student: true } },
            { name: 'Access to Diary', tiers: { Free: "Limited", Premium: true, Student: true } },
            { name: 'Fancy Premium Badge', tiers: { Free: false, Premium: true, Student: true } },
        ],
    },
    {
        name: 'Community',
        features: [
            { name: 'Creating Posts', tiers: { Free: "Up to 3 p/m", Premium: true, Student: true } },
            { name: 'Commenting', tiers: { Free: true, Premium: true, Student: true } },
        ],
    },
    {
        name: 'Diary',
        features: [
            { name: 'Summary overview', tiers: { Free: "30 days backwards viewing", Premium: true, Student: true } },
            { name: 'Advanced diary', tiers: { Premium: true, Student: true } },
        ],
    },
]
const faqs = [
    {
        id: 1,
        question: "What's the diary all about?",
        answer:
            "The diary allows you to keep a track of your feelings daily. You can use this diary to reflect on your overall feeling or you can show it to a professional.",
    },
    {
        id: 2,
        question: 'When should I fill the diary?',
        answer:
            'You can fill it any time of the day, but we recommend somewhere midday or afternoon for a more "accurate" results.',
    },
    {
        id: 3,
        question: 'What is the Advanced Diary feature',
        answer:
            "The Advanced diary are extra optional questions which can help you track your progress into a deeper detail!",
    },
    {
        id: 4,
        question: 'Do I lose my progress if I cancel temporarily my subscription?',
        answer: 'No! Your progress is kept until you have your account with us.',
    },
    {
        id: 5,
        question: "What is the Community?",
        answer:
            "The Community is a place where you can ask help or share your story with other people and help each other.",
    },
    {
        id: 6,
        question: "Are prices going to change?",
        answer:
            "Currently, we don't have any plans to change the prices, but in the future it is possible!",
    },
]
</script>