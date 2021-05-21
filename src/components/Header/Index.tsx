import Link from 'next/link'
import { RiPlayCircleLine } from 'react-icons/ri'

import { Header } from './styles'

export default function MyHeader() {
  return (
    <Header>
      <div>
        <img src="/icons/calendar.svg" alt="Icone Calendário" />
        <h2>Note It</h2>
      </div> 

      <ul>
        <li>
          <Link href="#">
            <a className="principal"> <RiPlayCircleLine size={20} className="icon"/> Notes </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a> <RiPlayCircleLine size={20} className="icon"/> Routine Mode </a>
          </Link>
        </li>
      </ul>
    </Header>
  )
}