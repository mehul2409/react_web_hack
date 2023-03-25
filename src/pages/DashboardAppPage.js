import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const theme = useTheme();

    return ( <
        >
        <
        Helmet >
        <
        title > Decentralized Patent Filling < /title>{' '} <
        /Helmet>{' '} <
        Container maxWidth = "xl" >
        <
        Typography variant = "h4"
        sx = {
            { mb: 5 } } >
        Hi, Welcome back { ' ' } <
        /Typography>{' '} <
        Grid container spacing = { 3 } >
        <
        Grid item xs = { 12 }
        sm = { 6 }
        md = { 3 } >
        <
        AppWidgetSummary title = "Weekly Sales"
        total = { 714000 }
        icon = { 'ant-design:android-filled' }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        sm = { 6 }
        md = { 3 } >
        <
        AppWidgetSummary title = "New Users"
        total = { 1352831 }
        color = "info"
        icon = { 'ant-design:apple-filled' }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        sm = { 6 }
        md = { 3 } >
        <
        AppWidgetSummary title = "Item Orders"
        total = { 1723315 }
        color = "warning"
        icon = { 'ant-design:windows-filled' }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        sm = { 6 }
        md = { 3 } >
        <
        AppWidgetSummary title = "Bug Reports"
        total = { 234 }
        color = "error"
        icon = { 'ant-design:bug-filled' }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        md = { 6 }
        lg = { 8 } >
        <
        AppNewsUpdate title = "News Update"
        list = {
            [...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
            }))
        }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        md = { 6 }
        lg = { 4 } >
        <
        AppTrafficBySite title = "Traffic by Site"
        list = {
            [{
                    name: 'FaceBook',
                    value: 323234,
                    icon: < Iconify icon = { 'eva:facebook-fill' }
                    color = "#1877F2"
                    width = { 32 }
                    />,
                },
                {
                    name: 'Google',
                    value: 341212,
                    icon: < Iconify icon = { 'eva:google-fill' }
                    color = "#DF3E30"
                    width = { 32 }
                    />,
                },
                {
                    name: 'Linkedin',
                    value: 411213,
                    icon: < Iconify icon = { 'eva:linkedin-fill' }
                    color = "#006097"
                    width = { 32 }
                    />,
                },
                {
                    name: 'Twitter',
                    value: 443232,
                    icon: < Iconify icon = { 'eva:twitter-fill' }
                    color = "#1C9CEA"
                    width = { 32 }
                    />,
                },
            ]
        }
        />{' '} <
        /Grid>{' '} <
        Grid item xs = { 12 }
        md = { 6 }
        lg = { 8 } >
        <
        AppTasks title = "Tasks"
        list = {
            [
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
            ]
        }
        />{' '} <
        /Grid>{' '} <
        /Grid>{' '} <
        /Container>{' '} <
        />
    );
}