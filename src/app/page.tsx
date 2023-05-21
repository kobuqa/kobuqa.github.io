import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-14">
      <section className="flex flex-col gap-8 items-center">
        <Image
          src="/xd-white.png"
          width={256}
          height={256}
          alt="Profile Picture"
          className="rounded-full border-2 border-white"
        />
        <h1 className="text-4xl">Aliaksandr Matveichykau</h1>
      </section>
      <section className="flex flex-col gap-4 max-w-[37rem]">
        <h2 className="text-xl">
          Enthusiastic and proactive Web Developer with 5+ years of experience.
          Knowledgeable in the user interface, debugging processes. Able to
          effectively self-manage during independent projects, as well as
          collaborate in a team setting.
        </h2>
      </section>
      <section className="flex w-full max-w-[70vw]">
        <div className="px-4 flex flex-col">
          <h3 className="text-slate-500 text-xl mb-4">Education</h3>
          <a href="https://gsmu.by/" className="text-lg ">
            Homel State Medical University
          </a>
          <span className="text-md">Pediatric Orthopedics Surgeon 👨🏻‍⚕️💉👶🏻</span>
          <span>2011 - 2017 🎓</span>
        </div>
        <div className="px-4 flex flex-col">
          <h3 className="text-slate-500 text-xl mb-4">Languages</h3>
          <span className="text-md">English - B2 🇬🇧</span>
        </div>
      </section>

      <section className="w-full max-w-[80vw] px-4 flex flex-col">
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
      <section className="w-full max-w-[80vw] px-4 flex flex-col">
        <ul className="grid grid-cols-3 gap-12">
          <li className="project relative flex">
            <div className="z-[10] bg-primary h-full w-full flex flex-col p-4 gap-2">
              <span className="text-lg text-center">#1 Skill Will</span>
              <span className="text-center">(Aug 2020 - Oct 2020)</span>
              <span className="text-sm text-slate-400 text-center">
                Performance Review platform for employees. Included program
                management, assesment previews and history.
              </span>
              <span>Team size: 10</span>
              <span>Role: Front End Developer</span>

              <ul className="flex gap-4 items-center flex-wrap">
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/react.png" height={16} width={16} alt="React" />
                  React
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/redux.png" height={16} width={16} alt="Redux" />
                  Redux
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/typescript.png"
                    height={16}
                    width={16}
                    alt="TypeScript"
                  />
                  TypeScript
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/mui.png"
                    height={16}
                    width={16}
                    alt="Material UI"
                  />
                  Material UI
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/axios.png" height={16} width={16} alt="Axios" />
                  axios
                </li>
              </ul>
            </div>
          </li>
          <li className="project relative flex">
            <div className="z-[10] bg-primary h-full w-full flex flex-col p-4 gap-2">
              <span className="text-lg text-center">#2 MassCRM</span>
              <span className="text-center">(Oct 2020 - Jul 2020)</span>
              <span className="text-sm text-slate-400 text-center">
                The goal of the project is creation of a CRM system for
                marketing mailing, the system is used for the internal purposes
                of the company. It also contains information about companies and
                clients.
              </span>
              <span>Team size: 12</span>
              <span>Role: Front End Developer</span>

              <ul className="flex gap-4 items-center flex-wrap">
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/react.png" height={16} width={16} alt="React" />
                  React
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/redux.png" height={16} width={16} alt="Redux" />
                  Redux
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/saga.png" height={16} width={16} alt="Saga" />
                  Redux Saga
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/websocket.png"
                    height={16}
                    width={16}
                    alt="Websocket"
                  />
                  WebSocket
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/formik.png"
                    height={16}
                    width={16}
                    alt="Formik"
                  />
                  Formik
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/jest.png" height={16} width={16} alt="Jest" />
                  Jest
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/enzyme.png"
                    height={16}
                    width={16}
                    alt="Enzyme"
                  />
                  Enzyme
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/typescript.png"
                    height={16}
                    width={16}
                    alt="TypeScript"
                  />
                  TypeScript
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/mui.png"
                    height={16}
                    width={16}
                    alt="Material UI"
                  />
                  Material UI
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/axios.png" height={16} width={16} alt="Axios" />
                  axios
                </li>
              </ul>
            </div>
          </li>

          <li className="project relative flex">
            <div className="z-[10] bg-primary h-full w-full flex flex-col p-4 gap-2">
              <span className="text-lg text-center">#3 Omni</span>
              <span className="text-center">(Jul 2020 - Mar 2021)</span>
              <span className="text-sm text-slate-400">
                Office management system designed for the new generation of
                workforce. It provides managers with centralized system to
                manage employees and employee-related matters. It contains
                HR-related features, that help Hrs to manage employees during
                all company stages.
              </span>
              <span>Team size: 8</span>
              <span>Role: Front End Developer</span>

              <ul className="flex gap-4 items-center flex-wrap">
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/react.png" height={16} width={16} alt="React" />
                  React
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/redux.png" height={16} width={16} alt="Redux" />
                  Redux
                </li>

                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/formik.png"
                    height={16}
                    width={16}
                    alt="Formik"
                  />
                  Formik
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/typescript.png"
                    height={16}
                    width={16}
                    alt="TypeScript"
                  />
                  TypeScript
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/antd.png"
                    height={16}
                    width={16}
                    alt="Ant Design"
                  />
                  Ant Design
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image
                    src="/storybook.png"
                    height={16}
                    width={16}
                    alt="Storybook"
                  />
                  Storybook
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <Image src="/axios.png" height={16} width={16} alt="Axios" />
                  axios
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-col">
            <span className="text-lg text-violet-500">
              #4 Sawayo (Mar 2021 - Dec 2021)
            </span>
            <span className="text-md text-slate-400">
              A system for business owners, that includes such features as: •
              Time tracking • Contracts management • COVID-19 tests management •
              Generation of monthly reports
            </span>
            <span>Team size: 12</span>
            <span>Role: Front End Developer</span>
            <ul className="flex gap-x-4 items-center flex-wrap">
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
            <span className="text-lg text-violet-500">
              #5 EasySnap (Dec 2021 - Mar 2022)
            </span>
            <span className="text-md text-slate-400">
              A high-end Web AR photo editor which allows users to use custom
              presets like: • Eyelashes • Extension architecture • Lips •
              Eyeshadow • Makeups • Face lifting
            </span>
            <span>Team size: 7</span>
            <span>Role: Front End Developer</span>
            <ul className="flex gap-x-4 items-center flex-wrap">
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
            <span className="text-lg text-violet-500">
              #6 TINT VTO (Mar 2022 - Oct 2022)
            </span>
            <span className="text-md text-slate-400">
              A Virtual Try On based project provides an extension with deep
              analysis of face, cosmetics advisor by skin type, showcase both
              webcam & photo, makeup transfer feature, that helps to detect and
              find certain cosmetics by photo analysis.
            </span>
            <span>Team size: 9</span>
            <span>Role: Front End Developer</span>

            <ul className="flex gap-x-4 items-center flex-wrap">
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
            <span className="text-lg text-violet-500">
              #7 Together (Oct 2022 - Dec 2022)
            </span>
            <span className="text-md text-slate-400">
              An AD platform for traveling people around the world to find or
              offer services & goods.
            </span>
            <span>Team size: 8</span>
            <span>Role: Front End Developer</span>
            <ul className="flex gap-x-4 items-center flex-wrap">
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
            <span className="text-lg text-violet-500">
              #8 LazyGoat (Dec 2022 - Feb 2023)
            </span>
            <span className="text-md text-slate-400">
              Multiplatform interactive streaming platform that provides a great
              opportunity to manage events with your favorite streamers
            </span>
            <span>Team size: 3</span>
            <span>Role: Front End Developer</span>
            <ul className="flex gap-x-4 items-center flex-wrap">
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
            <span className="text-lg text-violet-500">
              #9 NDA (Feb 2023 - Present)
            </span>
            <span className="text-md text-slate-400">
              User Interface for management custom game events, scheduling
              events, interactions while event is active.
            </span>
            <span>Team size: 5</span>
            <span>Role: Front End Developer</span>
            <ul className="flex gap-x-4 items-center flex-wrap">
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
