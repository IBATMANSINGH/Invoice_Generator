const express = require('express');
const router = express.Router();
const Setting = require('../models/setting');

// Home page route
router.get('/', (req, res) => {
    Setting.getAll((err, settings) => {
        if (err) {
            console.error('Error loading settings:', err);
            return res.render('index', { title: 'Invoice App' });
        }

        // Set the title based on company name if available
        let title = 'Invoice App';
        if (settings && settings.company_name && settings.company_name.trim() !== '') {
            title = settings.company_name;
        }

        res.render('index', { title, settings });
    });
});

// History page route
router.get('/history', (req, res) => {
    Setting.getAll((err, settings) => {
        if (err) {
            console.error('Error loading settings:', err);
            return res.render('history', { title: 'Invoice History' });
        }

        // Set the title based on company name if available
        let title = 'Invoice History';
        if (settings && settings.company_name && settings.company_name.trim() !== '') {
            title = `${settings.company_name} - History`;
        }

        res.render('history', { title, settings });
    });
});

module.exports = router;
