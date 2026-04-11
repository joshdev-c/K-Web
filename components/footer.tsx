import React from 'react'

export default function footer() {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          © 2026 KBArchitecture. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Terms of Service
          </a>
          <a href="https://www.instagram.com/katryn_kay/" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Instagram
          </a>
          <a href="https://www.facebook.com/KTRYNKAY" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
