import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-10">
      <section className="flex flex-col gap-8 items-center">
        <Image
          src="/profile_pic.png"
          width={256}
          height={256}
          alt="Profile Picture"
          className="rounded-full border-4 border-white"
        />
        <h1 className="text-4xl">Aliaksandr Matveichykau</h1>
        {/* <h4 className="text-2xl">Web Developer</h4> */}
      </section>
      <section className="flex flex-col gap-4 max-w-[50vw]">
        <h2 className="text-xl">
          Enthusiastic and proactive Web Developer with 5+ years of experience.
          Knowledgeable in the user interface, debugging processes. Able to
          effectively self-manage during independent projects, as well as
          collaborate in a team setting.
        </h2>
      </section>
      <section className="w-full max-w-[70vw] px-4 flex flex-col">
        <h3 className="text-slate-500 text-xl mb-4">Education</h3>
        <a href="https://gsmu.by/" className="text-lg ">
          Homel State Medical University
        </a>
        <span className="text-md">Pediatric Orthopedics Surgeon 👨🏻‍⚕️💉👶🏻</span>
        <span>2011 - 2017 🎓</span>
      </section>
      <section className="w-full max-w-[70vw] px-4 flex flex-col">
        <h3 className="text-slate-500 text-xl mb-4">Experience</h3>
        <ul className="flex gap-6 items-center">
          <li className="flex flex-col gap-2">
            <h3>Web Developer</h3>
            <h5 className="flex items-center gap-2">
              <Image
                src="/upwork.png"
                alt="Upwork"
                width={32}
                height={32}
                className="rounded-full"
              />
              Freelance
            </h5>
            <h6 className="text-sm">Aug 2020 - Oct 2020</h6>
          </li>
          <Image
            src="/next-arrow.png"
            alt="Next Arrow"
            width={16}
            height={16}
          />
          <li className="flex flex-col gap-2">
            <h3>Web Developer</h3>
            <h5 className="flex items-center gap-2">
              <Image
                src="/iba.jpeg"
                alt="IBA Group"
                width={32}
                height={32}
                className="rounded-full"
              />
              IBA Group
            </h5>
            <h6 className="text-sm">Aug 2020 - Oct 2020</h6>
          </li>
          <Image
            src="/next-arrow.png"
            alt="Next Arrow"
            width={16}
            height={16}
          />
          <li className="flex flex-col gap-2">
            <h3>Web Developer</h3>
            <h5 className="flex items-center gap-2">
              <Image
                src="/andersen.jpeg"
                alt="Andersen Lab"
                width={32}
                height={32}
                className="rounded-full"
              />
              Andersen
            </h5>
            <h6 className="text-sm">Oct 2020 - Aug 2021</h6>
          </li>
          <Image
            src="/next-arrow.png"
            alt="Next Arrow"
            width={16}
            height={16}
          />
          <li className="flex flex-col gap-2">
            <h3>Web Developer</h3>
            <h5 className="flex items-center gap-2">
              <Image
                src="/innowise.jpeg"
                alt="Innowise Group"
                width={32}
                height={32}
                className="rounded-full"
              />
              Innowise
            </h5>
            <h6 className="text-sm">Aug 2021 - Dec 2021</h6>
          </li>
          <Image
            src="/next-arrow.png"
            alt="Next Arrow"
            width={16}
            height={16}
          />
          <li className="flex flex-col gap-2">
            <h3>Web Developer</h3>
            <h5 className="flex items-center gap-2">
              <Image
                src="/mbicycle.jpeg"
                alt="Mbicycle"
                width={32}
                height={32}
                className="rounded-full"
              />
              MBicycle
            </h5>
            <h6 className="text-sm">Dec 2021 - Present</h6>
          </li>
        </ul>
      </section>
      <section className="w-full max-w-[70vw] px-4 flex flex-col">
        <h3 className="text-slate-500 text-xl mb-4">Projects</h3>
        <ul className="flex flex-col gap-6">
          <li className="flex flex-col">
            <span>#1 - Skill Will</span>
            <span>Team size: 10</span>
            <span>Duration: Aug 2020 - Oct 2020</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: Performance Review platform for employees. Included
              program management, assesment previews and history
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/mui.png"
                  height={16}
                  width={16}
                  alt="Material UI"
                />
                Material UI
              </li>
              <li className="flex items-center gap-2">
                <Image src="/axios.png" height={16} width={16} alt="Axios" />
                axios
              </li>
            </ul>
          </li>
          <li className="flex flex-col">
            <span>#2 - MassCRM</span>
            <span>Team size: 12</span>
            <span>Duration: Oct 2020 - Jul 2020</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: The goal of the project is creation of a CRM system
              for marketing mailing, the system is used for the internal
              purposes of the company. It also contains information about
              companies and clients.
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux
              </li>
              <li className="flex items-center gap-2">
                <Image src="/saga.png" height={16} width={16} alt="Saga" />
                Redux Saga
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/websocket.png"
                  height={16}
                  width={16}
                  alt="Websocket"
                />
                WebSocket
              </li>
              <li className="flex items-center gap-2">
                <Image src="/formik.png" height={16} width={16} alt="Formik" />
                Formik
              </li>
              <li className="flex items-center gap-2">
                <Image src="/jest.png" height={16} width={16} alt="Jest" />
                Jest
              </li>
              <li className="flex items-center gap-2">
                <Image src="/enzyme.png" height={16} width={16} alt="Enzyme" />
                Enzyme
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/mui.png"
                  height={16}
                  width={16}
                  alt="Material UI"
                />
                Material UI
              </li>
              <li className="flex items-center gap-2">
                <Image src="/axios.png" height={16} width={16} alt="Axios" />
                axios
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#3 - Omni</span>
            <span>Team size: 8</span>
            <span>Duration: Jul 2020 - Mar 2021</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: Office management system designed for the new
              generation of workforce. It provides managers with centralized
              system to manage employees and employee-related matters. It
              contains HR-related features, that help Hrs to manage employees
              during all company stages.
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux
              </li>

              <li className="flex items-center gap-2">
                <Image src="/formik.png" height={16} width={16} alt="Formik" />
                Formik
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/antd.png"
                  height={16}
                  width={16}
                  alt="Ant Design"
                />
                Ant Design
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/storybook.png"
                  height={16}
                  width={16}
                  alt="Storybook"
                />
                Storybook
              </li>
              <li className="flex items-center gap-2">
                <Image src="/axios.png" height={16} width={16} alt="Axios" />
                axios
              </li>
            </ul>
          </li>
          <li className="flex flex-col">
            <span>#4 - Sawayo</span>
            <span>Team size: 12</span>
            <span>Duration: Mar 2021 - Dec 2021</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: A system for business owners, that includes such
              features as: • Time tracking • Contracts management • COVID-19
              tests management • Generation of monthly reports
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux Toolkit
              </li>
              <li className="flex items-center gap-2">
                <Image src="/nx.png" height={16} width={16} alt="nx" />
                nx
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/graphql.png"
                  height={16}
                  width={16}
                  alt="Graph QL"
                />
                GraphQL
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/react-hook-form.png"
                  height={16}
                  width={16}
                  alt="React Hook Form"
                />
                React Hook Form
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/mui.png"
                  height={16}
                  width={16}
                  alt="Material UI"
                />
                Material UI
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/storybook.png"
                  height={16}
                  width={16}
                  alt="Storybook"
                />
                Storybook
              </li>
              <li className="flex items-center gap-2">
                <Image src="/i18n.png" height={16} width={16} alt="i18n" />
                i18n
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#5 - EasySnap</span>
            <span>Team size: 7</span>
            <span>Duration: Dec 2021 - Mar 2022</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: A high-end Web AR photo editor which allows users to
              use custom presets like: • Eyelashes • Extension architecture •
              Lips • Eyeshadow • Makeups • Face lifting
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux Toolkit
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vite.png" height={16} width={16} alt="    Vite" />
                Vite
              </li>
              <li className="flex items-center gap-2">
                <Image src="/stripe.png" height={16} width={16} alt="Stripe" />
                Stripe
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/react-hook-form.png"
                  height={16}
                  width={16}
                  alt="React Hook Form"
                />
                React Hook Form
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/mui.png"
                  height={16}
                  width={16}
                  alt="Material UI"
                />
                Material UI
              </li>
              <li className="flex items-center gap-2">
                <Image src="/axios.png" height={16} width={16} alt="Axios" />
                axios
              </li>
              <li className="flex items-center gap-2">
                <Image src="/jest.png" height={16} width={16} alt="Jest" />
                Jest
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#6 - TINT VTO</span>
            <span>Team size: 9</span>
            <span>Duration: Mar 2022 - Oct 2022</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: A Virtual Try On based project provides an extension
              with deep analysis of face, cosmetics advisor by skin type,
              showcase both webcam & photo, makeup transfer feature, that helps
              to detect and find certain cosmetics by photo analysis.
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/svelte.png" height={16} width={16} alt="Svelte" />
                Svelte
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/banuba.png"
                  height={16}
                  width={16}
                  alt="Banuba SDK"
                />
                Banuba SDK
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vite.png" height={16} width={16} alt="    Vite" />
                Vite
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/typescript.png"
                  height={16}
                  width={16}
                  alt="TypeScript"
                />
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/headless-ui.png"
                  height={16}
                  width={16}
                  alt="Svelte Headless UI"
                />
                Svelte Headless UI
              </li>
              <li className="flex items-center gap-1">
                <Image
                  src="/tailwindcss.png"
                  height={16}
                  width={16}
                  alt="TailwindCSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/svelte-query.svg"
                  height={16}
                  width={16}
                  alt="Svelte Query"
                />
                Svelte Query
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/graphql.png"
                  height={16}
                  width={16}
                  alt="Graph QL"
                />
                GraphQL
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vitest.svg" height={16} width={16} alt="Vitest" />
                Vitest
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#7 - Together</span>
            <span>Team size: 8</span>
            <span>Duration: Oct 2022 - Dec 2022</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: An AD platform for traveling people around the world
              to find or offer services & goods.
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/next.png" height={16} width={16} alt="Next" />
                Next
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vite.png" height={16} width={16} alt="    Vite" />
                Vite
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux
              </li>
              <li className="flex items-center gap-1">
                <Image
                  src="/tailwindcss.png"
                  height={16}
                  width={16}
                  alt="TailwindCSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/headless-ui.png"
                  height={16}
                  width={16}
                  alt="React Headless UI"
                />
                React Headless UI
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/notistack.png"
                  height={16}
                  width={16}
                  alt="Notistack"
                />
                Notistack
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/react-query.png"
                  height={16}
                  width={16}
                  alt="React Query"
                />
                React Query
              </li>
              <li className="flex items-center gap-2">
                <Image src="/sentry.png" height={16} width={16} alt="Sentry" />
                Sentry
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#7 - LazyGoat</span>
            <span>Team size: 3</span>
            <span>Duration: Dec 2022 - Feb 2023</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: Multiplatform interactive streaming platform that
              provides a great opportunity to manage events with your favorite
              streamers
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/next.png" height={16} width={16} alt="Next" />
                Next
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vite.png" height={16} width={16} alt="    Vite" />
                Vite
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux Toolkit
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/redux.png"
                  height={16}
                  width={16}
                  alt="RTK Query"
                />
                RTK Query
              </li>
              <li className="flex items-center gap-1">
                <Image
                  src="/tailwindcss.png"
                  height={16}
                  width={16}
                  alt="TailwindCSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/mui.png"
                  height={16}
                  width={16}
                  alt="Material UI"
                />
                Material UI
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/react-hook-form.png"
                  height={16}
                  width={16}
                  alt="React Hook Form"
                />
                React Hook Form
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/youtube.png"
                  height={16}
                  width={16}
                  alt="Youtube API"
                />
                Youtube API
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/twitch.png"
                  height={16}
                  width={16}
                  alt=" Twitch API"
                />
                Twitch API
              </li>
            </ul>
          </li>

          <li className="flex flex-col">
            <span>#8 - NDA</span>
            <span>Team size: 5</span>
            <span>Duration: Feb 2023 - Present</span>
            <span>Role: Front End Developer</span>
            <span>
              Description: User Interface for management custom game events,
              scheduling events, interactions while event is active.
            </span>
            <ul className="flex gap-x-4 items-center flex-wrap">
              <li>
                <span>Stack:</span>
              </li>
              <li className="flex items-center gap-2">
                <Image src="/next.png" height={16} width={16} alt="Next" />
                Next
              </li>
              <li className="flex items-center gap-2">
                <Image src="/react.png" height={16} width={16} alt="React" />
                React
              </li>
              <li className="flex items-center gap-2">
                <Image src="/vite.png" height={16} width={16} alt="    Vite" />
                Vite
              </li>
              <li className="flex items-center gap-2">
                <Image src="/redux.png" height={16} width={16} alt="Redux" />
                Redux Toolkit
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/redux.png"
                  height={16}
                  width={16}
                  alt="RTK Query"
                />
                RTK Query
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/framer-motion.png"
                  height={16}
                  width={16}
                  alt="Framer Motion"
                />
                Framer Motion
              </li>
              <li className="flex items-center gap-1">
                <Image
                  src="/tailwindcss.png"
                  height={16}
                  width={16}
                  alt="TailwindCSS"
                />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/headless-ui.png"
                  height={16}
                  width={16}
                  alt="React Headless UI"
                />
                React Headless UI
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/react-hook-form.png"
                  height={16}
                  width={16}
                  alt="React Hook Form"
                />
                React Hook Form
              </li>
              <li className="flex items-center gap-2">
                <Image src="/dayjs.png" height={16} width={16} alt="DayJs" />
                Day.js
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
}
