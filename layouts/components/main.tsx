import { forwardRef, HTMLAttributes } from 'react'
import Header from './header'
import Footer from './footer'

export type MainLayoutProps = HTMLAttributes<HTMLDivElement>

export const MainLayout = forwardRef<HTMLDivElement, MainLayoutProps>(({ children }) => {
    return (
        <div className="mainLayout">
            <Header />
            {children}
            <Footer />
        </div>
    )
})

MainLayout.displayName = 'MainLayout'