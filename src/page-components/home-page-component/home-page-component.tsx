import Navbar from '@/layout/navbar/navbar';
import styles from './home-page-component.module.css';
import { Button, Card, Heading, Text } from '@/components';
import Image from 'next/image';
import { company, timeLineList } from '@/helpers/constants';
import { Fragment } from 'react';
import Footer from '@/layout/footer/footer';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import ScrollUp from '@/components/scroll-up/scroll-up';

const HomePageComponent = () => {
    return (
        <div className={styles.home}>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.heroTitle}>
                    <Heading tag='h1'>Lern New Skills Online With Shunqor <span>Academy</span></Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto nam minus nostrum! Vero distinctio vel, consequuntur impedit saepe suscipit deserunt possimus molestias harum maiores dolore dolorem quae debitis ipsum.
                    </Text>
                    <Button appearence='success' arrow='right'>
                        Join For Free
                    </Button>
                </div>
                <div className={styles.heroImage}>
                    <Image src={'/hero.png'} alt={'hero-image'} width={600} height={500} />
                </div>
            </div>
            <div className={styles.company}>
                <Heading tag='h3'>Trusted by the world's best</Heading>
                <div className={styles.companyIcon}>
                    {company.map((icon, idx) => (
                        <Fragment key={idx}>{icon}</Fragment>
                    ))}
                </div>
            </div>
            <div className={styles.timeline}>
				<Heading tag='h3'>What we can teach you</Heading>
				<div className={styles.timelineCard}>
					<Timeline lineColor='#ddddd'>
						{timeLineList.map(({ Icon, title, text }, idx) => (
							<TimelineEvent
								key={idx}
								title={title}
								icon={<Icon />}
								bubbleStyle={{ borderColor: '#140342', backgroundColor: '#fff' }}
								contentStyle={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
								titleStyle={{ fontSize: '20px' }}
							>
								<Card color='white' style={{ padding: 20 }}>
									<Text>{text}</Text>
								</Card>
							</TimelineEvent>
						))}
					</Timeline>
				</div>
				<div className={styles.mobileTimeline}>
					{timeLineList.map((data, idx) => (
						<Card color='white' style={{ padding: 20 }} className={styles.card} key={idx}>
							<Heading tag='h3'>{data.title}</Heading>
							<Text>{data.text}</Text>
						</Card>
					))}
				</div>
			</div>
            <ScrollUp />
            <Footer />
        </div>
    )
}

export default HomePageComponent