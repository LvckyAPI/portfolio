import {type Metadata} from 'next'

export const metadata: Metadata = {
    robots: {
        index: false,
    },
    icons: {
        icon: '../favicon.ico',
    }
};

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}