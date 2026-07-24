import Card from "../components/Card";

const About = () => {
  return (
    <section id="about" className="py-14">
      <div>
        <p className="text-center text-2xl font-bold">About</p>
      </div>

      <div className="flex justify-center items-center mx-8 mt-4 mb-12">
        <Card className="bg-white p-4 border border-gray-100">
          <p className="indent-8 italic tracking-tight">
            With a background in fullstack web development using React
            (TypeScript/JavaScript) and Laravel, I have developed a strong
            understanding of how applications run in real-world environments. My
            experience includes working with Linux servers via CLI and SSH for
            remote management, along with networking and system configuration,
            as well as hands-on exposure to endpoint management and security
            practices in Windows environments. I’m currently growing toward
            cloud technologies to support scalable and efficient systems.
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6 mx-8 mt-8 mb-12">
        {/* HIMAKALA */}
        <div className="flex justify-center items-center">
          <video
            src="./kadiv-himakala-danu.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-48 md:h-96 rounded-md shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Card className="h-fit bg-white p-6 border border-gray-100 shadow-md rounded-md">
            <p className="text-center text-xl font-bold tracking-tight">
              Head of Human Resources Development Division (2023-2024)
            </p>
            <div className="mt-4">
              <ul className="list-disc pl-5">
                <li>
                  <p className="text-justify tracking-tight">
                    Coordinating related fields in order to realize the
                    organization of their respective work domains.
                  </p>
                </li>
                <li>
                  <p className="text-justify tracking-tight">
                    Implementing a structured and dynamic regeneration system.
                    Also, determining the general policy of the division
                    concerned.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* PENS */}
        <div className="flex flex-col justify-center items-center">
          <Card className="h-fit bg-white p-6 border border-gray-100 shadow-md rounded-md">
            <p className="text-center text-xl font-bold tracking-tight">
              Associate Degree of Informatic Engineering (2021-2024)
            </p>
            <div className="mt-4">
              <ul className="list-disc pl-5">
                <li>
                  <p className="text-justify tracking-tight">
                    Graduated from PENS with an Associate Degree in Informatics
                    Engineering with a GPA of 3.49 and a final project entitled
                    NOTAKOS: Boarding Student Tuition Management Application.
                  </p>
                </li>
                <li>
                  <p className="text-justify tracking-tight">
                    NOTAKOS: Boarding Student Tuition Management Application
                    (Final Project).
                  </p>
                  <p className="text-justify font-sm font-light italic tracking-tight leading-tight">
                    NOTAKOS is a personal finance recording system with flexible
                    money allocation features based on android application.
                    NOTAKOS is developed with react native framework and uses
                    backend services (API) with Laravel to manage user
                    authentication and data storage.
                  </p>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="./wisuda.jpg"
            className="h-48 md:h-96 rounded-md shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
