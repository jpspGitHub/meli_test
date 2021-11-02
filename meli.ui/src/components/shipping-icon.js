import SmallShippingIcon from '../assets/ic_shipping.png'
import BigShippingIcon from '../assets/ic_shipping@2x.png'

export default function ShippingIcon({ freeShipping, bigIcon = false }) {
    if (freeShipping) {
        return <><img className="shipping-icon" src={bigIcon ? BigShippingIcon : SmallShippingIcon} alt="Envio Gratis" /></>
    } else {
        return null;
    }
}