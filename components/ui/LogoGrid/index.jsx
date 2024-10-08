import Image from 'next/image'
import img from '../../../public/images/hero.png'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import layers from '../../../public/logos/layers.svg'
import adobe from '../../../public/logos/adobe.svg'

const logos = [
    // {
    //     src: freshbooks,
    //     alt: "freshbooks"
    // },
    // {
    //     src: layers,
    //     alt: "layers"
    // },
    // {
    //     src: layers,
    //     alt: "layers"
    // },
    

]


const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h1 className="font-semibold text-sm text-gray-600 text-center">
                Developed using tools such as  <strong>NextJs, Tailwind CSS, Gemini-api, Google-sheets-api and material-ui</strong>
            </h1>

            <div className="mt-6">
                <ul className="flex gap-x-15 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid