class MetadataCache {
  constructor() {
    this.cache = new Map();
    this.cacheDuration = 5 * 60 * 1000; 
  }

  
  async get(sock, groupJid) {
    const now = Date.now();
    const cached = this.cache.get(groupJid);

    
    if (cached && (now - cached.timestamp) < this.cacheDuration) {
      
      return cached.data;
    }

    
    
    const metadata = await sock.groupMetadata(groupJid);
    
    
    this.cache.set(groupJid, {
      data: metadata,
      timestamp: now
    });

    return metadata;
  }

  
  async refresh(sock, groupJid) {
    
    const metadata = await sock.groupMetadata(groupJid);
    
    this.cache.set(groupJid, {
      data: metadata,
      timestamp: Date.now()
    });

    return metadata;
  }

  
  invalidate(groupJid) {
    
    this.cache.delete(groupJid);
  }


  clear() {
    
    this.cache.clear();
  }


  stats() {
    return {
      size: this.cache.size,
      groups: Array.from(this.cache.keys())
    };
  }

  
  cleanup() {
    const now = Date.now();
    let cleaned = 0;

    for (const [groupJid, entry] of this.cache.entries()) {
      if ((now - entry.timestamp) >= this.cacheDuration) {
        this.cache.delete(groupJid);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      
    }

    return cleaned;
  }
}


export const metadataCache = new MetadataCache();


setInterval(() => {
  metadataCache.cleanup();
}, 60 * 60 * 1000);
