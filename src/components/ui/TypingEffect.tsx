'use client'
import { useState, useEffect } from 'react'

interface TypingEffectProps {
    words: string[]
}

export function TypingEffect({ words }: TypingEffectProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            const fullText = words[currentWordIndex % words.length]

            if (isDeleting) {
                // Deleting
                setText(fullText.substring(0, text.length - 1))
                setTypingSpeed(50) // Faster when deleting
            } else {
                // Typing
                setText(fullText.substring(0, text.length + 1))
                setTypingSpeed(150 - Math.random() * 50) // Human-like variation
            }

            // Finished typing
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000)
                setTypingSpeed(2000) // Pause before deleting
            }
            // Finished deleting
            else if (isDeleting && text === '') {
                setIsDeleting(false)
                setCurrentWordIndex((prev) => prev + 1)
                setTypingSpeed(500) // Pause before typing next
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, currentWordIndex, typingSpeed, words])

    return (
        <span className="relative inline-block text-left text-primary">


            <span className={isDeleting ? "" : "typing"}>
                {text}
            </span>
            <span className="cursor-blink ml-1 inline-block w-[3px] h-[0.9em] align-middle bg-primary"></span>
        </span>
    )
}
