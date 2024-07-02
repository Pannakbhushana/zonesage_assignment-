interface BenefitItem {
    image: string;
    title: string;
}

interface MidDataItem {
    image: string;
    title: string;
    des: string;
}

const benefitData: BenefitItem[] = [
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon5-AMqzRXDGDPskeNGE.svg',
        title: 'Client insights',
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon6-dWxVZMLJOWc1nL4Y.svg',
        title: 'Increased efficiency',
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon7-mnlkQ74en9C8vXBX.svg',
        title: 'Process automation',
    }
    
];

const benefitData2: BenefitItem[] = [
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon8-A1aNRgzk1xU5paEG.svg',
        title: 'Data-driven innovation',
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon9-mxB9Px2QXRtpNREE.svg',
        title: 'Reduced costs',
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon10-AQE9lXe18GtLpMPJ.svg',
        title: 'Market insights',
    }
    
];



const midData: MidDataItem[] = [
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon1-YBgxRLPwRBUvalQv.svg',
        title: 'Big Data Consulting',
        des: "Sometimes you need to look far to see close. Our experts help you make sense of big data. "
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon3-mxB9PEqbP5Ta5rkg.svg',
        title: 'Data Infrastructure',
        des: "It's not enough to have data, you also need to have the right tools to manage it day-to-day."
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon2-d956kWb9Jkty1zP4.svg',
        title: 'Data Analytics',
        des: "From in-house training to tailored service packages, we offer a wide range of data analysis services."
    },
    {
        image: 'https://assets.zyrosite.com/lilofn1qx/icon4-dOq0RrLp8LTPNrN9.svg',
        title: 'Data Visualization',
        des: "In order to make informed decisions, you need to understand your data. We can visualize yours for you."
    },
];

export {benefitData,benefitData2,midData}