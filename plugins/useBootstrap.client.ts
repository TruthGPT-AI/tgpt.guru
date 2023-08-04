// @ts-nocheck
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery/dist/jquery.min'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)

    if (typeof window !== 'undefined') {
        $('.nav-link').click(() => {
            if ($('.navbar-collapse collapse').hasClass('show'))
                $('.navbar-toggler').click()
        })
    }
})