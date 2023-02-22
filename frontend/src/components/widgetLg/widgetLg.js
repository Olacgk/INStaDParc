// import Button from './button/button.tsx'
import './widgetLg.scss'

const WidgetLg = () => {
  return (
    <div className='widgetLgComponent'>
      <h3 className="title">Dernière demandes</h3>
      <table>
        <tr className='firstTr'>
          <th>Demandeur</th>
          <th>Date</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Jan 2023</td>
          <td className='amount'>Intervention</td>
          <td className='status'>{/*<Button type='Approved' />*/}</td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>2 Fev 2023</td>
          <td className='amount'>Intervention</td>
          <td className='status'>{/*<Button type='Declined' />*/}</td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>10 Fev 2023</td>
          <td className='amount'>Prêt de materiel</td>
          <td className='status'>{/*<Button type='Pending' />*/}</td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg" alt="" />
            <span>Caroline Ennes</span>
          </td>
          <td className='date'>14 Fev 2023</td>
          <td className='amount'>Prêt de matériel</td>
          <td className='status'>{/*<Button type='Approved' />*/}</td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg