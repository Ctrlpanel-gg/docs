import React from 'react';
import styles from './HomepagePartners.module.css';

const partners = [
	{
		href: 'https://zap-hosting.com/a/29b1c37a4f87bde5463afe8a0f49d129b16ccf9e',
		img: 'https://zap-hosting.com/interface/download/images.php?type=affiliate&id=421578',
		alt: 'ZAP-Hosting Gameserver and Webhosting',
	},
];

export default function HomepagePartners() {
	return (
		<section className={styles.partners}>
			<div className="container">
				<h2 className="text--center">Our partners</h2>
				<div className={styles.partnerList}>
					{partners.map((p, idx) => (
						<a
							key={idx}
							href={p.href}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.partnerLink}
						>
							<img
								src={p.img}
								alt={p.alt}
								className={styles.partnerLogo}
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
