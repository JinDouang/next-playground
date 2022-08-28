import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { NextPageWithLayout } from "./_app";
import { NewsList } from "../components/News/NewsList/NewsList";
import { NotificationsContainer } from '../components/Notifications/NotificationsContainer/NotificationsContainer';
import { WelcomeUser } from "../components/WelcomeUser/WelcomeUser";
import { WidgetsContainer } from "../components/Widgets/WidgetsContainer/WidgetsContainer";
import { selectData } from "../context/widgets";
import { news } from "../data/news";
import { notifications } from '../data/notifications';
import { user } from "../data/user";
import { MenuContainerLayout } from "../layouts/MenuContainerLayout/MenuContainerLayout";

const Home: NextPageWithLayout = (): ReactElement => {
    const widgets = useSelector(selectData);
    return (
        <div className='flex flex-row h-full'>
            <div className="basis-3/4 flex flex-col m-4">
                <div className="basis-1/12 mb-4">
                    <WelcomeUser user={user}/>
                </div>
                {/* widgets components area */}
                <div className="basis-8/12 mb-4">
                    <WidgetsContainer widgets={widgets} />
                </div>
                {/* news components area */}
                <div className="basis-3/12 mb-4">
                    <NewsList news={news} />
                </div>
            </div>
            {/* notifications components area */}
            <div className="basis-1/4">
                <NotificationsContainer notifications={notifications} />
            </div>
        </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement): ReactElement {
    return (
        <MenuContainerLayout>
            {page}
        </MenuContainerLayout>
    )
}

export default Home

