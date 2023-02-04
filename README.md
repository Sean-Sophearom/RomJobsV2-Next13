This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Description

this is a remake of my old react project [RomJobs](https://github.com/Sean-Sophearom/rom-jobs-client) in Next.js mainly because I want SEO but also because the old project was written in _spaghetti_ code and I now possess the ability to do better, much much better.

---

## Tech Stacks

1. **Next.js** : The framework that basically the entire project is centered around. Even most of the backend are handled by next's api routes.

2. **Typescript** : To provide type safety for the whole project

3. **TailwindCSS** : For styling

4. **Prisma** : The orm to handle migration as well as database integration for a PostgreSQL database that is hosted on [ElephantSQL](https://www.elephantsql.com/)

5. **react-i18next & i18next** : Provide English and Khmer translation that integrates well with next's ssr and ssg

6. **Formik & Yup** : Handle form input and form validation

7. **NextAuth** : Takes care of most authentication needs for the project as well as provide integration for Google Auth and Email Auth(_Magic Link_)

8. **Nodemailer** : To send verification/authentication email when users sign up

---

## Current Status : _Paused_

Unfortunately, the project has been put on pause due to the unstability of Next13, which is currently in beta. When next13 hit official release, this project will be continued but right now it is just impossible to get anything serious done, for I have met bugs after bugs for even the smallest features. For instance, there is not even an api availeble for acessing the current route, yet which just shows how not-ready it currently is.
