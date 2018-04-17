package com.xebia.vulnmanager.services;

import com.xebia.vulnmanager.models.nmap.objects.NMapReport;
import com.xebia.vulnmanager.repositories.NMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NmapService {
    private NMapRepository nMapRepository;

    @Autowired
    public NmapService(final NMapRepository nMapRepository) {
        this.nMapRepository = nMapRepository;
    }


    public List<NMapReport> getAllReports() {
        return nMapRepository.findAll();
    }

    public Optional<NMapReport> getReportById(long id) {
        return nMapRepository.findById(id);
    }
}
