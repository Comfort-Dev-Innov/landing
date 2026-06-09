import React from 'react'
import Badge from './Badge';

interface TestimonialProps {
    review: string;
    imgUrl?: string;
    firstName: string;
    lastName: string;
    position: string;
    company: string;
    tags: string[];
}

const TestimonialCard = ({ review, imgUrl, firstName, lastName, position, company, tags }: TestimonialProps) => {
    return (
        <div className="flex flex-col gap-[40px] justify-center items-center w-full">
            <h1 className="font-inter font-medium text-[24px] lg:text-[26px] text-black text-center">
                {review}
            </h1>
            <div className="flex flex-col gap-[18px] justify-center items-center w-full">
                <div className="size-[102px] p-[10px] rounded-full bg-gray-200 flex items-center justify-center">
                    {imgUrl ? (
                        <img src={imgUrl} alt={`${firstName} ${lastName}`} className="w-full h-full object-cover" />
                    ) : (
                        <span className="font-inter font-medium text-gray-600 text-xl">
                            {firstName.charAt(0)}{lastName.charAt(0)}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-[12px] justify-center items-center w-full">
                    <p className="font-inter font-bold text-base lg:text-lg text-black text-center">
                        {firstName} {lastName}
                    </p>
                    <p className="font-inter text-base lg:text-lg text-black text-center">
                        {position}, {company}
                    </p>
                </div>
                <div className="flex flex-wrap gap-[12px] justify-center items-center">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard