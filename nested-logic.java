// Java file with deeply nested logic
package com.test.app;

import java.util.*;
import java.util.stream.*;

public class DataProcessor {
    private static final String VERSION = "1.0.0";
    private List<String> data;

    public DataProcessor() {
        this.data = new ArrayList<>();
    }

    public void processData(List<String> input) {
        for (String item : input) {
            if (item != null && !item.isEmpty()) {
                String processed = item.trim().toLowerCase();
                if (processed.length() > 3) {
                    data.add(processed);
                }
            }
        }
    }

    public List<String> filterData(String criteria) {
        return data.stream()
            .filter(item -> item.contains(criteria))
            .collect(Collectors.toList());
    }

    public Map<String, Long> getStatistics() {
        Map<String, Long> stats = new HashMap<>();
        stats.put("total", (long) data.size());
        stats.put("unique", data.stream().distinct().count());
        return stats;
    }

    public void clearData() {
        data.clear();
    }
}
