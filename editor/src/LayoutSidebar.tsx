import { ReactNode, FC } from 'react'
import './LayoutSidebar.css'

interface Props {
	children: ReactNode
}

function LayoutSidebar({ children }: Props) {
	return <div className="LayoutSidebar">{children}</div>
}
export const LayoutSidebarFunctional: FC<Props> = ({ children }) => {
	return <>{children}</>
}

export default LayoutSidebar
