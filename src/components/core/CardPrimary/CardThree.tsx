import { Separator } from '@radix-ui/react-separator'
import { ArrowRight } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'

import { CardProps } from '@/components/core/CardPrimary/Card.types'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

function CardThree({ text, icon, title, desc, titleApp, progress, progressvalue, progressvalueX }: CardProps) {
    return (
        <div className="rounded-2xl border-2 border-color-blue bg-white drop-shadow-2xl transition-transform hover:scale-105 lg:flex-col">
            <div className="flex flex-col gap-8 p-6">
                <div className="">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-sm font-semibold lg:text-lg">{text}</p>
                            </div>
                            <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-color-studio to-color-persianBlue px-5 py-2">
                                <p className="text-xs font-semibold text-white">{title}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-color-studio">{titleApp}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <p className="text-sm font-normal text-color-storm">{desc}</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-xs text-color-storm">{progress}</p>
                        </div>
                        <div>
                            <p className="text-xs font-extrabold text-color-storm">{progressvalue}</p>
                        </div>
                    </div>
                    <div>
                        <Progress value={progressvalueX} />
                    </div>
                    <div>
                        <Separator />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardThree
