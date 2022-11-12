import styles from './styles'
import NavBar from 'components/NavBar'
import ShoppingCartSection from './ShoppingCartSection'
import Footer from 'components/Utils/Footer'

const Cart = ({ cartSlice }) => {
  const steps = ['Shopping Cart', 'Checkout Detail', 'Order Complete']
  const stepIdx = 0
  const cartList = Object.values(cartSlice.cart)
  const totalCost = cartSlice.totalPrice
  return (
    <div className="cart-wrapper">
      <NavBar />
      <div className="page-title">
        <div className="container">
          {steps.map((step, index) => {
            return (
              <div className="row" key={index}>
                <div className={`path ${stepIdx === index ? 'current' : null}`}>{step}</div>
                {index === steps.length - 1 ? null : (
                  <span className="material-icons-outlined arrow">arrow_forward_ios</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {cartList.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 20 }}>
          <p style={{ fontSize: 22, color: '#777', textAlign: 'center', lineHeight: 1.5 }}>
            There are no products in the cart
          </p>
          <Link href="/products">
            <a className="back-button">Back to the store</a>
          </Link>
        </div>
      ) : (
        <ShoppingCartSection cartList={cartList} totalCost={totalCost} />
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Cart
